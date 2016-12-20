(function () {
    'use strict';

    module.exports = function () {
       $.gulp.task('js', function() {
           return $.gulp.src($.path.app)
            .pipe($.gp.babel({
                presets: ['es2015']
            }))
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.concat('app.js'))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.uglify())
            .pipe($.gulp.dest($.config.root + '/assets/js'))
       });
    }

} ());