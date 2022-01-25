import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes:{
            light:{
                primary: '#0F1026',
                secondary: '#1B2040',
                accent: '#4973F2',
                error: '#F2911B',
                info: '#4973F2',
                success: '#4973F2',
                warning: '#F2911B'
            }
        },
        light: true

    }
});
