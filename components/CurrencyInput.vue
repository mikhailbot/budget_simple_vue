<template>
   <div class="">
    <masked-input
      type="text"
      :mask="numberMask"
      :guide="true"
      v-on="listeners"
      v-model="currencyValue"
      class="bg-grey-lighter appearance-none border-2 border-grey-lighter focus:border-blue rounded w-full py-2 px-4 text-grey-darker outline-0"
    />
    </div>
</template>

<script>
import MaskedInput from 'vue-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import numeral from 'numeral'

export default {
  components: {
    MaskedInput
  },

  props: ['valueInCents'],

  data() {
    return {
      currencyValue: this.dollarsFromCents(this.valueInCents),
    }
  },

  computed: {
    integerValue() {
      // Numeral will parse a formatted $xx.x string into an integer.
      return numeral(this.currencyValue || 0)
        .divide(0.01)
        .value()
    },

    listeners() {
      return {
        ...this.$listeners,
        input: event => {
          // Return the integer value when the masked input changes via user input so that the
          // component consumer can use `v-model="someData.Attribute"` for reactive changes.
          this.$nextTick(() => {
            this.$emit('input', this.integerValue)
          })
        },
      }
    },
  },

  methods: {
    dollarsFromCents(val) {
      return numeral(val)
        .multiply(0.01)
        .format('0.00')
    },

    numberMask: createNumberMask({
      allowDecimal: true,
    }),
  }

}
</script>

<style>

</style>
