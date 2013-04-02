/*
ref : https://github.com/niceaji/javascript-study/blob/gh-pages/app.js
*/
function initReveal(){
    // Full list of configuration options available here:
    // https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,

        theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
        transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

        // Optional libraries used to extend on reveal.js
        dependencies: [
            { src: 'reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
            { src: 'reveal.js/plugin/markdown/showdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            { src: 'reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            { src: 'reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
            { src: 'reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
            { src: 'reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
        ]
    });
}


$(document).ready(function(){
    var query = function(s){
        var str=location.search.substr(1);
        var r={},t=[];
        var a=str.split('&');
        for(var i=0;i<a.length;i++){t=a[i].split("=");r[t[0]] = t[1];}
        return r;
    }();
    
    if(!query.doc){
        query.doc = 'basic';
    }

    $.ajax("doc/"+ query.doc +".md").done(function(md){

        //md parse
        var mds = md.split("***")
        ,   tmp = []
        ,   slides = []
        ,   html = ''


        $(mds).each(function(index, item){
            tmp = item.split(/(##[^(\n)]+)/);
            slides[index] = [];

            for(var i=1; i<tmp.length; i+=2){
                slides[index].push( tmp[i] + tmp[i+1] );
            }
        });

        // dom
        $(slides).each(function(index, section){
            section=_.map(section,function(value){
                return '<section data-markdown><script type="text/template">'+value+'</script></section>';
            });

            html += '<section>'+section.join('')+'</section>';
        });

        $(".slides").append(html);

        initReveal();

    }).error(function(){

        alert("not found");

    });


});
