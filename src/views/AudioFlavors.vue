<template>
  <div class="main">
    <img
      class="iconImage"
      src="@/assets/MeltingCloudsWhite.png"
      @click="openPage"
    />

    <!-- <fd-button class="returnButton" styling="emphasized" type="standard" icon="nav-back" @click="openPage" /> -->
    <h1>Audio Flavors</h1>
    <!-- Audio processing tutorial: https://www.youtube.com/watch?v=VXWvfrmpapI&t=78s 
          SVG Manipulation: https://www.w3schools.com/graphics/svg_polygon.asp 
    -->
    <hr />
    <br />
    <b-button variant="primary" size="lg" @click="analyzeAudio()">Play</b-button>
    <br /><br />
    <h1 class="chordList">{{note.toString()}}</h1>

    <!-- viewBox="0 0 100 100" -->
    <svg height="200" width="2500" viewBox="0 0 210 210">
      <!-- <circle cx="50" cy="50" r="10" :fill="avCircleColor" :stroke="avCircleColor" /> -->

      <circle
        v-for="(i, index) in displayValues"
        :key="index"
        :cx="svgX(index)"
        :cy="svgY(index)"
        :r="i / 50"
        :fill="avCircleColor"
        :stroke="avCircleColor"
      />

      <!-- 
          Arch (A/a)
          X radius
          Y radius
          rotation 
          large arch flag (size - is it larger than 180deg or not)
          sweep flag (direction - up or down)
          x to end
          y to end
         -->
      <!-- <path
        d="M50 10 A5 5 0 1 1 60 10"
        :stroke="avCircleColor"
        stroke-width="1"
        fill="none"
      />
      <path
        d="M60 10 A5 5 0 1 0 70 12"
        :stroke="avCircleColor"
        stroke-width="1"
        fill="none"
      /> -->
    </svg>

    <AudioFlavorIcon/>
  </div>
</template>

<script>
import AudioFlavorIcon from '@/components/AudioFlavorIcon.vue'

export default {
  name: "AudioFlavors",
  props: {},
  components: {
    AudioFlavorIcon
  },
  computed:{


  },
  data() {
    return {
      audio: new Audio(),
      audioContext: null,
      audioSource: null,
      analyser: null,
      dataArray: null,
      audioBuffer: null,
      complete: false,
      note: [],
      noteIntegrity:{
        hz:0,
        current: 0,
        complete: 0
      },
      noteStrings: ["C", "C\u266f", "D", "E\u266D", "E", "F", "F\u266f", "G", "G\u266f", "A", "B\u266D", "B"],

      avCircleColor: "lightblue",
      displayValues: [0],
      svg: {
        row:0,
        column:0
      }
    }
  },

  mounted() {

  },

  methods: {
    openPage: function () {
      this.$router.push("/");
    },

    svgX(e){
      e = e%30
      return 12 * e - 120
    },

    svgY(e){
      e = Math.floor(e/30)
      return e*10
    },

    analyzeAudio: function () {
      this.audio.src = "/audio/NEEDTOBREATHE-Banks.mp3";
      // this.audio.src = "/audio/C.mp3";

      this.audioContext = new AudioContext();
      this.audio.play();
      let that = this
      this.audio.addEventListener('ended', function() {
        that.complete = true;
        console.log("Done!")
      },false);

      this.audioSource = this.audioContext.createMediaElementSource(this.audio);
      this.analyser = this.audioContext.createAnalyser();

      let freq = 64 //2048
      this.analyser.connect(this.audioContext.destination);
      this.analyser.fftSize = freq;
      this.audioBuffer = new Float32Array(freq);
      const bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(bufferLength);
      this.analyser.getByteTimeDomainData(this.dataArray);
      this.audioSource.connect(this.analyser);

      // this.animate();
      this.getFrequencies();
    },

    getFrequencies: function () {
      // SVG
      this.displayValues = [];
      this.analyser.getByteFrequencyData(this.dataArray);
      this.displayValues = this.dataArray;

      // Hz
      this.analyser.getByteTimeDomainData(this.dataArray);
      console.log(this.dataArray);

      let ac = this.autoCorrelateFrequencies(this.dataArray, this.audioContext.sampleRate);  // Converting audio data to Hz
      ac = ac.toFixed(2); 

      // if(ac > 50 &&  ac <= 3951){ 
        // console.log(ac) 
        let newNote = this.parseChords(ac)
        if(newNote != this.note[0]){
          // console.log(newNote)
          this.note.unshift(newNote);
        }
      // }
      

      if(this.complete == false){
        let that = this
        setTimeout(
          that.getFrequencies, 50)
        // requestAnimationFrame(this.getFrequencies), 
      }
      // else{
      //   cancelAnimationFrame(this.getFrequencies)
      // }
      
    },

    autoCorrelateFrequencies: function (buf, sampleRate) {
      // Implements the ACF2+ algorithm
      let SIZE = buf.length;
      let rms = 0;

      for (let i = 0; i < SIZE; i++) {
        let val = buf[i];
        rms += val * val;
      } // end for

      rms = Math.sqrt(rms / SIZE);

      if (rms < 0.01)
        // not enough signal
        return -1;

      let r1 = 0,
        r2 = SIZE - 1,
        thres = 0.2; // What is "r" variable

      for (let i = 0; i < SIZE / 2; i++) {
        if (Math.abs(buf[i]) < thres) {
          r1 = i;
          break;
        }
      } // end for

      for (let i = 1; i < SIZE / 2; i++) {
        if (Math.abs(buf[SIZE - i]) < thres) {
          r2 = SIZE - i;
          break;
        }
      } // end for

      buf = buf.slice(r1, r2);
      SIZE = buf.length;

      let c = new Array(SIZE).fill(0);

      for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE - i; j++) {
          c[i] = c[i] + buf[j] * buf[j + i];
        } // end for
      } // end for

      let d = 0;

      while (c[d] > c[d + 1]) d++; // end while

      let maxval = -1,
        maxpos = -1;

      for (let i = d; i < SIZE; i++) {
        if (c[i] > maxval) {
          maxval = c[i];
          maxpos = i;
        } // end if
      } // end for

      var T0 = maxpos;

      let x1 = c[T0 - 1],
        x2 = c[T0],
        x3 = c[T0 + 1];
      let a = (x1 + x3 - 2 * x2) / 2;
      let b = (x3 - x1) / 2;

      if (a) {
        T0 = T0 - b / (2 * a);
      } // end if

      return sampleRate / T0;
    }, 


    parseChords: function(hz){
      // noteIntegrity:{
      //   hz:0,
      //   current: 0,
      //   complete: 0
      // },
      let noteNum = 12 * (Math.log(hz / 440) / Math.log(2)); 
      noteNum = Math.round(noteNum) + 69;
      let note = this.noteStrings[noteNum % 12];
      // console.log(note)

      return note

    }





  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding: 2vh 5vw;
}

span {
  color: white;
  margin: 10px;
}

.returnButton {
  /* float: left; */
  /* margin: 15px; */
  z-index: 10;
  position: absolute;
  left: 5px;
  top: 5px;
}

.content {
  margin: 30px;
  background-color: white;
  border-radius: 5px;
  padding: 15px;
  color: rgb(241, 56, 56);
}

.svgContainer {
  display: flex;
  justify-content: center;
}

.svgContainer img {
  width: 20vw;
}

.chordList{
  max-width: 86vw;
  word-wrap:break-word;
}
</style>
