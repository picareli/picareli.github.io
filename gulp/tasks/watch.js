var gulp = require("gulp"),
watch = require("gulp-watch"),
browserSync = require("browser-sync").create();

gulp.task("watch", function(){
    
    browserSync.init(
        {
            notify: false,

            server:
            {
                baseDir: "./"
            }
        }
    );

    watch("./index.html", function(){
        browserSync.reload();
    });

    watch("./site/styles/**/*.css", function(){
        gulp.start("cssInject");
    });
});

gulp.task("cssInject", ["styles"],function()
{
    return gulp.src("./site/temp/styles/styles.css")
        .pipe(browserSync.stream());
});