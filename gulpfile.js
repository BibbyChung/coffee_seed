"use strict";

let gulp = require("gulp");
let shell = require("gulp-shell");
let merge = require("merge-stream");
let rimraf = require("rimraf");
let runSequence = require("run-sequence");
let through = require('through2');

var coffee = require('gulp-coffee');
var sourcemaps = require('gulp-sourcemaps');

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

gulp.task("compile_coffee_to_js", () => {

  return gulp.src("src/**/*.coffee")
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(sourcemaps.write('.', {
      includeContent: false, 
      sourceRoot: '../src'
    }))
    .pipe(gulp.dest("dist"));

});

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