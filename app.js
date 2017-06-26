/**
 * Created by Julius Alvarado on 6/25/2017.
 */

var growler = new Vue({
    el: '#growler',

    // data model ish
    data: {
        appName: 'Growler',
        appLink: '<a href="http://julius3d.com">Julius3D Studios</a>',
        appSlogan: 'User Centered Software Development',
        appLogo: 'http://julius3d.com/img/logo/j3d.png',
        appStyle: {
            color: '#434343',
            fontWeight: 'bolder',
            border: 'solid 2px cornflowerblue',
            display: 'inline-block',
            padding: '8px'
        },
        isOnline: false,
        isPowerSyntaxEnabled: false,
        searchIndexes: [],
        searchRadio: 'books',
        query: '',

        // CSS classes
        accentColor: 'accent-color',
        headers: 'headers',
        textGreen: 'text-green'
    },

    // method definitions
    methods: {
        executeSearch: function () {
            alert(this.query);
        }
    }
});

//