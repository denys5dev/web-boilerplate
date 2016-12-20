(function () {
    'use strict';

    global.$ = {
        package: require('./package.json'),
        path: {
            task: require('./gulp/path/tasks.js'),
            templates: require('./gulp/path/templates.js'),
            app: require('./gulp/path/app.js')
        },
        config: require('./gulp/config'),
        gulp: require('gulp'),
        rimraf: require('rimraf'),
        browserSync: require('browser-sync').create(),
        gp: require('gulp-load-plugins')()
    };

    $.path.task.forEach(function (taskPath) {
        require(taskPath)();
    });

    $.gulp.task('default', $.gulp.series('clean', 
        $.gulp.parallel( 'pug', 'js', 'sass'), 
        $.gulp.parallel('watch', 'serve')
    ));

} ());