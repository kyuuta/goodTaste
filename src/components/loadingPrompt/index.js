import Vue from 'vue';
import loadingPrompt from './loadingPrompt.vue';


const LoadingPrompt = Vue.extend(loadingPrompt);
let instance;

export default {
    open(options = {}) {
        if (!instance) {
            instance = new LoadingPrompt({
                el: document.createElement('div')
            })
        }

        if (instance.visible) return;
        instance.text = typeof options === 'string' ? options : options.text || 'loading...';
        document.body.appendChild(instance.$el);

        Vue.nextTick(() => {
            instance.visible = true;
        })
    },
    close() {
        if(instance) {
            instance.visible = false;
        }
    }
}