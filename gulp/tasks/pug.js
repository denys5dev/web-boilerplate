(function () {
    'use strict';

    module.exports = function () {
        $.gulp.task('pug', function () {
            return $.gulp.src($.path.templates)
                .pipe($.gp.pug({ pretty: '\t' }))
                .on('error', $.gp.notify.onError(function (error) {
                    console.log('error');
                    return {
                        title: 'Pug',
                        message: error.message
                    }
                }))
                .pipe($.gulp.dest($.config.root));
        });
    }

} ());