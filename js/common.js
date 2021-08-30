$(document).ready(function () {
    // header dropdown
    $('.header__user .d-flex').click(function () {
        $('.header__userdropdown').slideToggle();
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.header__userdropdown').length && !$target.closest('.header__user').length) {
            $('.header__userdropdown').slideUp();
        }
    });

    // Sidebar
    $('.header__burger').click(function () {
        $('.pagecontent').toggleClass('small-sb');
        $('header.header').toggleClass('small-sb');

        $('.left-sb ul .item').removeClass('active');
        $('.left-sb ul .item .sublist').slideUp();
    });

    $('.left-sb ul .item > a').click(function (e) {
        e.preventDefault();
        $('.left-sb ul .item > a').parent().not($(this)).removeClass('active');
        $(this).parent().toggleClass('active');

        $('.left-sb ul .item .sublist').not($(this).parent().find('.sublist')).slideUp();
        $(this).parent().find('.sublist').slideToggle();
    });

    $(document).on('mouseenter', '.small-sb .left-sb', function () {
        $('.pagecontent ').addClass('small-sbhover');
    });

    $(document).on('mouseleave', '.small-sb .left-sb', function () {
        $('.pagecontent ').removeClass('small-sbhover');
        $('.left-sb ul .item .sublist').slideUp();
    });

    if ($(window).width() < 768) {
        $(document).on('click', '.header__burger', function () {
            $('body').append('<div class="sidebar-backdrop"></div>');

            setTimeout(function () {
                $('.sidebar-backdrop').addClass('show');
            }, 50)
        });

        $(document).click(function (event) {
            let $target = $(event.target);
            if (!$target.closest('.left-sb').length && !$target.closest('.header__burger').length) {
                $('.pagecontent').removeClass('small-sb');
                $('.sidebar-backdrop').remove();
            }
        });
    }



    // upload file
    $('.chooseFile').bind('change', function () {
        var filename = $(this).val();
        $(this).next('.file-upload').find('.noFile').text(filename.replace("C:\\fakepath\\", ""));
    });

    // custom selects

    $(".custom-select").select2({
        placeholder: "Select a state",

    });

    // Select - cau-adduser.html

    // const addSelectAll = matches => {
    //     if (matches.length > 0) {
    //         return [
    //             { id: 'selectAll', text: 'Select all', matchIds: matches.map(match => match.id) },
    //             ...matches
    //         ];
    //     }
    // };

    // const handleSelection = event => {
    //     if (event.params.data.id === 'selectAll') {
    //         $('#my-select').val(event.params.data.matchIds);
    //         $('#my-select').trigger('change');
    //     };
    // };

    $('#my-select').select2({
        minimumInputLength: 0,
        multiple: true,
        // sorter: addSelectAll,
        tags: true,
        closeOnSelect: false
    });
    // $('#my-select').on('select2:select', handleSelection);

    // text editor
    if ($('body *').is('#editor')) {
        CKEDITOR.replace('editor');
    }

    // Menu settings page - change menu
    $('.change-menu').change(function () {
        $('.varmenu').hide();

        var menuChangeSelect = $('.change-menu').val();
        switch (menuChangeSelect) {
            case '1':
                $('.varmenu.varmenu_main').show();
                break;
            case '2':
                $('.varmenu.varmenu_sub').show();
                break;
            case '3':
                $('.varmenu.varmenu_subsub').show();
                break;
            case '4':
                $('.varmenu.varmenu_indepentent').show();
                break;
            default:
                console.log('default');
        }
    });

    // add manage menu
    $('input[name="menuradio"]').on('change', function () {
        if ($('#menucheck1').is(':checked')) {
            $('.manuselecthide').hide();
            $('.menufield-title').text('Menu Name');

        } else if ($('#menucheck2').is(':checked')) {
            $('.manuselecthide').show();
            $('.menufield-title').text('Sub Menu Name');
            $('.manuselecthide label').text('Menu');

        } else if ($('#menucheck3').is(':checked')) {
            $('.manuselecthide').show();
            $('.menufield-title').text('Sub Sub Menu Name');
            $('.manuselecthide label').text('Sub Menu');
        }
    });

    // qa page type - select
    $('#qa-pagetype').change(function () {
        $('.qa-categoryselect').hide();

        var qaPageTypeVal = $('#qa-pagetype').val();
        switch (qaPageTypeVal) {
            case '1':
                $('.qa-categoryselect').hide();
                break;
            case '2':
                $('.qa-categoryselect').show();
                break;
            case '3':
                $('.qa-categoryselect').show();
                break;
            case '4':
                $('.qa-categoryselect').hide();
                break;
        }
    });

    // datepicker
    if ($('body *').is('.datepicker')) {
        $('.datepicker').datepicker({
            autoclose: true,
            todayHighlight: true,
            orientation: 'bottom',
        });
    }

    // Upload img
    $(".image-box").click(function (event) {
        var previewImg = $(this).children("img");

        $(this)
            .siblings()
            .children("input")
            .trigger("click");

        $(this)
            .siblings()
            .children("input")
            .change(function () {
                var reader = new FileReader();

                reader.onload = function (e) {
                    var urll = e.target.result;
                    $(previewImg).attr("src", urll);
                    previewImg.parent().css("background", "transparent");
                    previewImg.show();
                    previewImg.siblings("div").hide();
                };
                reader.readAsDataURL(this.files[0]);
            });
    });

    // Is Repeat (checkbox) - subscribed-user-care-bundle.html

    $('#isrepeat').on('change', function () {
        if ($(this).is(':checked')) {
            $('#enddate').find('.datepicker').prop('disabled', true);
        } else {
            $('#enddate').find('.datepicker').prop('disabled', false);
        }
    });

    // Scheduled (subscribed-user-care-bundle.html)
    const dayBtn = $('.wshedule__day span');
    $(dayBtn).click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $(this).parents('.w-shedule-wrap__row').find('.starttime .custom-select, .forwhat .custom-select ').prop('disabled', false);

        } else {
            $(this).parents('.w-shedule-wrap__row').find('.starttime .custom-select, .forwhat .custom-select, .endtime .custom-select').prop('disabled', true)
        }
    });

    $('.starttime .custom-select').on('change', function () {
        $(this).parents('.w-shedule-wrap__row').find('.endtime .custom-select').prop('disabled', false)
    });

    $('.sortselect').select2({
        minimumInputLength: 0,
        multiple: true,
        tags: true,
        closeOnSelect: false
    });

    // alerts
    $('.alertbtn').click(function () {
        $('.alertbox').removeClass('show');
    });

    $('.alertbox__close').click(function () {
        $(this).parents('.alertbox').removeClass('show');
    });
    // v1
    $('.alertbtn.s-v1').click(function () {
        $('.alertbox.success.v1').addClass('show');
    });

    $('.alertbtn.ev-1').click(function () {
        $('.alertbox.error.v1').addClass('show');
    });
    // v2  

    $('.alertbtn.s-v2').click(function () {
        $('.alertbox.success.v2').addClass('show');
    });

    $('.greenbtn.ev-2').click(function () {
        $('.alertbox.error.v2').addClass('show');
    });


});