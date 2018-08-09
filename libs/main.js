(function($){
    $(document).ready(function(){
        $.ajax({
            'url' : '../data/demo.json', 
            'dataType' : 'json',
            'async': false,
            success : function(content){
                $.each(content, function(index, val){
                    $('body').on('click', '[data-demo]', function(){
                        _co = $(this).data('demo');
                        if(_co == index){
                            title = val.title;
                            description = val.description;
                            text = val.content;
                            images = val.images;
                            $(this).popup_box({
                                "title" : layout_main(title, description), 
                                "content" : layout_content(), 
                                "btn_close" : true, 
                                "modal_ctrl" : true
                            })
                            if($('.modal').is(':visible')){
                                for(i in text) {
                                    $('body').find('.note').append("<li>" + text[i] + "</li>")
                                }
                                for(j in images) {
                                    $('body').find('.img_group').append("<li><img src='" + images[j] + "' /></li>")
                                }
                            }
                        }
                    })
                })
            }
        });
        function layout_main(title, description) {
            return `
                <h6>${title}</h6>
                <p>${description}</p>
            `
        }
        function layout_content() {
            return `
                <ul class="note"></ul>
                <ul class="img_group"></ul>
            `
        }
        function layout_text(content) {
            return `
                <li>${content}</li>
            `
        }
        function layout_img(title, description) {
            return `
                <h6>${title}</h6>
                <p>${description}</p>
            `
        }
    })
})(jQuery)