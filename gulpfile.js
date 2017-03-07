"use strict";

let gulp = require("gulp");
let shell = require("gulp-shell");
let merge = require("merge-stream");
let rimraf = require("rimraf");
let runSequence = require("run-sequence");
let through = require('through2');

let getCopyFilesPipe = (sourcePatten, targetPath) => {

    return gulp.src(sourcePatten)
        .pipe(gulp.dest(targetPath));

};



//----------------------------------------------------------------------

gulp.task("clean", (cb) => {

    rimraf("./dist", cb);

    // rimraf("./test", () => {
    //     rimraf("./dist", cb);
    // });

});


gulp.task("compile_coffee_to_js", shell.task([
    'coffee --map --compile --output dist/ src/' 
    //'cucumber.js --format pretty'
]));

gulp.task('build', (cb) => {
    runSequence(
        "clean",
        [
            "compile_coffee_to_js",
        ],
        cb
    );
});

//how to execute
//1. run "coffee src/main.coffee"
//2. run "nodemon src/main.coffee"