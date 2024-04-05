const mongoose = require('mongoose');

// Criteria Sub Schema
const criteriaSchema = mongoose.Schema({
  type: {
    type: String,
    enum: ['plain_text', 'variable'],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  variable: {
    $1: {
      type: {
        type: String,
        enum: ['value', 'indicator'],
        required: function () {
          return this.type === 'variable' && this.text.includes('$1');
        },
      },
      values: {
        type: [Number],
        required: function () {
          return this.type === 'variable' && this.text.includes('$1');
        },
      },
    },
    $2: {
      type: {
        type: String,
        enum: ['value'],
        required: function () {
          return this.type === 'variable' && this.text.includes('$2');
        },
      },
      values: {
        type: [Number],
        required: function () {
          return this.type === 'variable' && this.text.includes('$2');
        },
      },
    },
    $3: {
      type: {
        type: String,
        enum: ['value'],
        required: function () {
          return this.type === 'variable' && this.text.includes('$3');
        },
      },
      values: {
        type: [Number],
        required: function () {
          return this.type === 'variable' && this.text.includes('$3');
        },
      },
    },
    $4: {
      type: {
        type: String,
        enum: ['indicator'],
        required: function () {
          return this.type === 'variable' && this.text.includes('$4');
        },
      },
      study_type: {
        type: String,
        enum: ['cci', 'rsi'],
        required: function () {
          return this.type === 'variable' && this.text.includes('$4');
        },
      },
      parameter_name: {
        type: String,
        enum: ['period'],
        required: function () {
          return this.type === 'variable' && this.text.includes('$4');
        },
      },
      min_value: {
        type: Number,
        required: function () {
          return this.type === 'variable' && this.text.includes('$4');
        },
      },
      max_value: {
        type: Number,
        required: function () {
          return this.type === 'variable' && this.text.includes('$4');
        },
      },
      default_value: {
        type: Number,
        required: function () {
          return this.type === 'variable' && this.text.includes('$4');
        },
      },
    },
  },
});

// Main Schema
const ruleSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    enum: ['green', 'red'],
    required: true,
  },
  criteria: [criteriaSchema],
});

const Rule = mongoose.model('Rule', ruleSchema);

module.exports = Rule;
