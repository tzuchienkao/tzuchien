(function($){
    $(document).ready(function(){
        $.ajax({
            'url' : '../../tzuchien/data/demo.json', 
            'dataType' : 'json',
            'async': false,
            success : function(content){
                $.each(content, function(index, val){
                    $('body').on('click', '[data-demo]', function(){
                        _co = $(this).data('demo');
                        if(_co == index){
                            $(this).popup_box({
                                "title" : val.title, 
                                "content" : val.content, 
                                "btn_close" : true, 
                                "modal_ctrl" : true
                            })
                        }
                    })
                })
            }
        });
    })
})(jQuery)