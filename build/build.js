({
 	baseUrl: '..',

    paths: {
        app:                'src/js',
        three_examples:     'bower_components/threejs/examples/js',
        three_builds:       'bower_components/threejs/build/patched', // here is the result of the script patch-three.js
        text:               'bower_components/text/text',
        ace_builds:         'bower_components/ace-builds/src-noconflict',
        dat_gui:            'src/external_libs',
        almond:             'bower_components/almond',
        clipboard:          'bower_components/clipboard/dist/clipboard.min'
    },

    shim: {
        "three_examples/Detector":                          ['three_builds/three'],
        "three_examples/controls/OrbitControls":            ['three_builds/three'],
        "three_examples/loaders/DDSLoader":                 ['three_builds/three'],
        "three_examples/loaders/OBJLoader":                 ['three_builds/three'],
        "three_examples/loaders/MTLLoader":                 ['three_builds/three'],
        "three_examples/loaders/ColladaLoader":             ['three_builds/three'],
        "three_examples/geometries/TeapotBufferGeometry":   ['three_builds/three'],
    },

    name: 'almond/almond',
    
    include: [
        'app/pocket.gl',

        // Ace glsl language
        'ace_builds/mode-glsl',

        // Ace Themes
        'ace_builds/theme-vibrant_ink',    // dark
        'ace_builds/theme-crimson_editor', // bright
    ],

    wrap: {
    	startFile: "start.frag.js",
    	endFile:   "end.frag.js"
    }
})