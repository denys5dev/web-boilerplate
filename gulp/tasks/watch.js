(function(){
    'use strict';

    module.exports = function() {
        $.gulp.task('watch', function() {
            $.gulp.watch('./src/templates/**/*.pug',  $.gulp.series('pug'));
            $.gulp.watch('./src/js/**/*.js', $.gulp.series('js'));
            $.gulp.watch('./src/styles/**/*.scss', $.gulp.series('sass'));
            $.gulp.watch('./src/img/**/*.*', $.gulp.series('copy.image'));
        });
    } 
}());