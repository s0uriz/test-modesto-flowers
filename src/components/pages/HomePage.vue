<template>
  <div class="page">
    <v-dialog v-if="showDialog" @close="closeModal">
      <h2 class="h2 text-center dialog-header">
        Please answer a few questions
      </h2>
      <div class="text-center" v-if="loading">Fetching data...</div>
      <div v-else>
        <v-stepper :steps="5" :current="currentStep"></v-stepper>
        <div v-if="currentQuestion">
          <p class="question-title">{{ currentQuestion.title }}</p>
          <div
            v-for="(question, i) in currentQuestion.questions"
            :key="i"
            class="input-box"
          >
            <input
              :id="i"
              :type="currentQuestion.type"
              :value="question"
              v-model="checkboxValue"
            />
            <label :for="i">{{ question }}</label>
          </div>
          <v-textarea
            v-if="currentQuestion.textarea"
            v-model="text"
            class="textarea-dialog"
          ></v-textarea>
          <div class="block input-box" v-if="currentQuestion.noAnswer">
            <input
              id="allow"
              type="checkbox"
              value="I do not want to answer"
              v-model="checkboxValue"
            />
            <label for="allow">I do not want to answer</label>
          </div>
        </div>
        <v-button @click.native="onNext" :disabled="disableBtn">
          {{ btnTitle }}
        </v-button>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import VStepper from "@/components/ui/VStepper.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "HomePage",
  components: { VStepper },
  computed: {
    ...mapState(["questions", "loading", "hideModal"]),
    currentQuestion() {
      return this.questions.length > 0
        ? this.questions[this.currentStep]
        : null;
    },
    disableBtn() {
      let flag = true;
      if (this.currentQuestion?.questions) {
        flag = !this.checkboxValue.length;
      } else {
        flag = !this.checkboxValue.length && !this.text.length;
      }
      return flag;
    },
    btnTitle() {
      return this.currentStep === 4 ? "Done" : "Next";
    },
  },
  data() {
    return {
      showDialog: true,
      currentStep: 0,
      checkboxValue: [],
      results: [],
      text: "",
    };
  },
  methods: {
    ...mapActions(["getQuestions"]),
    onNext() {
      this.saveResult();
      switch (this.currentStep) {
        case 1:
          if (this.checkboxValue === "Comfortable") {
            this.currentStep = 3;
          } else {
            this.currentStep += 1;
          }
          break;
        case 2:
          this.currentStep = 4;
          break;
        case 4:
          this.sendData();
          break;
        default:
          this.currentStep += 1;
      }
      this.checkboxValue = [];
      this.text = "";
    },
    saveResult() {
      let item = {
        title: this.currentQuestion.title,
      };
      if (this.text) {
        item.text = this.text;
      }
      if (this.checkboxValue.length) {
        item.value = this.checkboxValue;
      }
      this.results.push(item);
    },
    sendData() {
      // send this.results to backend
      setTimeout(() => {
        this.closeModal();
      }, 1500);
    },
    closeModal() {
      this.showDialog = false;
      localStorage.setItem("hideModal", true);
    },
  },
  created() {
    if (this.hideModal) {
      this.showDialog = false;
    } else {
      this.getQuestions();
    }
  },
};
</script>

<style lang="scss">
.dialog-header {
  margin-bottom: 50px;
}
.textarea-dialog {
  width: 50%;
  margin: 20px 0 10px;
}
.input-box {
  display: flex;
  align-items: center;
  margin: 12px 0;
}
.question-title {
  margin: 30px 0 40px;
  font-size: 15px;
  font-weight: 500;
}
</style>
