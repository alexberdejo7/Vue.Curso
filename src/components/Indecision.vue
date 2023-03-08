<template>

  <img v-if="img" :src="img" alt="">
   <div class= "bg-dark ">  </div>
   <div class="indecision-container"> 

        <input 
            v-model="question"
            type="text" 
            placeholder="Haz una pregunta">
        <p> Recuerda terminar con signo " ? "</p>


        <div v-if="isValid">
            <h2>{{question}}</h2>
            <!-- <h1> {{answer === 'yes' ? 'Si' : 'No'}} </h1> -->
            <h1> {{answer === 'yes' ? 'Si' : 'No'}} </h1>
        </div>




   </div>
</template>

<script>
export default {
    data() {
        return {
            question: null,
            answer: null,
            img: null,
            isValid: false

        }
    },

    methods: {
       async getAnswer() {
        this.answer = 'Mmmmm...'

        const {answer, image} = await fetch('https://yesno.wtf/api').then(resp => resp.json() )


        // console.log(answer)
        this.answer = answer
        this.img = image
        }
    },
    watch: {
        question (value, oldValue){
            

            this.isValid = false

            if (!value.includes('?') ) return

            this.isValid = true
            this.getAnswer()



        }

    }
}

</script>

<style >

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(4, 3, 75, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>