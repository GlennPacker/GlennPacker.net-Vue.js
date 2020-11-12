export const basicComponent =
`
import Vue from 'vue';
import template from './template.html';
import anotherComponent from '../anothercomponent/anothercomponent'

export default {
    mixins: [aMixin],
    components: {
        anotherComponent
    }
    template,
    props: {
        a: String/Number/Object,
        b: [String, Number],
        c: {
            type: String,
            default: 'foo'
        },
    },
    data(){
        return {
            message: 'hi',
            basicObject: { message: 'foo'}
        }
    },
    methods:{
        talk(){
            console.write(this.message);
        }
    },
    computed: {
        aComputedProperty: function() {
            return this.message + 'there';
        }
    },
    watch: {
        message: function(newVal, oldVal) {
            console.log('new value' + newVal);
        },
        'basicObject.message': function (newVal,OldVal) {
            console.log('property of an object');
        }
    },
    created: function () {
        console.log('component created);
    },
    mounted: function () {
        console.log('component mounted);
    },
};
`