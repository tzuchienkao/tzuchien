(function($){

    var js_url = document.querySelectorAll('script[src]');
    var this_url = js_url[ js_url.length - 1 ].src;
    var split_url = this_url.split( '/' );
    var this_filename = split_url[split_url.length - 1];
    var _root = this_url.split(this_filename)[0];

    $.fn.extend({
        /* 觸發產生彈窗 */
        /* popup_box(觸發按鈕, 彈窗內容){
            觸發按鈕(require) : element
            彈窗內容(require) : obj
        } */
        popup_box : function(option){
            $('.modal_box').remove();
            $('body').append('<div class="modal_box"></div>');
            
            $.ajax({
                'url' : _root + 'popup.html', 
                'dataType' : 'html', 
                'async' : false, 
                success: function(conent){
                    $('body').addClass('modal');
                    $('.modal_box').append(conent);
                    popup_inner(option);
                    var close = $('.btn_fun_close');
                    close_popup_box(close, option);
                }
            });
        }/* //觸發產生彈窗 */
    });
    /* 彈出視窗 */
    /* popup_inner(標題, 標題樣式名稱, 內容, 關閉(叉叉)按鈕, 按鈕群_按鈕1, 按鈕群_按鈕2){
        標題(require) : text (default:'對話視窗')
        標題樣式名稱(option) : text (default:'')
        內容(option) : html
        關閉按鈕(option) : boolean (default:true)
        按鈕群_1(option) : html
        按鈕群_2(option) : html
    } */
    function popup_inner(option){
        var title = option.title == '' || undefined ? '對話視窗' : option.title;
        var title_class = option.title_class == '' || undefined ? '' : option.title_class;
        var content = option.content == '' || undefined ? null : option.content;
        var btn_close = option.btn_close;
        var btn_group_1 = option.btn_group_1 == '' || undefined ? '' : option.btn_group_1;
        var btn_group_2 = option.btn_group2 == '' || undefined ? '' : option.btn_group_2;
        if(content === '' || content === undefined){
            $('.popup_content').remove();
        }
        if(btn_group_1 === '' || btn_group_1 === undefined){
            $('.popup_btn_group').remove();
        }else if(btn_group_2 === '' || btn_group_2 === undefined){
            $('.popup_btn_2').remove();
        }
        if(btn_close === true || btn_close === ''){
            $('.popup .btn_close').show();
            $('.popup .btn_close').siblings('.box_submit').toggleClass('typo_align_c');
        }else {
            $('.popup .btn_close').hide();
        }
        $('.popup_header').text(title).addClass(title_class);
        $('.popup_content').html(content);
        $('.popup_btn_1').html(btn_group_1);
        $('.popup_btn_2').html(btn_group_2);
    }/* //彈出視窗 */

    /* 關閉彈出視窗 */
    /* close_popup_box(關閉(叉叉)按鈕, 點遮罩會關閉彈出視窗){
        關閉按鈕 : 如果popup_inner給的是 true, 就會進來執行
        遮罩(option) : boolean (default:true)
    } */
    function close_popup_box(close, option){
        var _target =  $('.popup');
        var modal_ctrl = option.modal_ctrl;
        // 點遮罩會關閉彈出視窗
        if(modal_ctrl === true || modal_ctrl === '' || modal_ctrl === undefined){
            $('.modal_box').on('click', function(e){
                $(this).remove();
            });
            $('.popup_block').on('click', function(e){
                e.stopPropagation();
            });
        }//點遮罩會關閉彈出視窗
        close.on('click', function(){
            $('.popup').fadeOut(300, function(){
                $('.modal_box').remove();
                $('body').removeClass('modal');
            });
        });
    }/* //關閉彈出視窗 */
})(jQuery)