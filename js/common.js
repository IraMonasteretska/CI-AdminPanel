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

    $('.left-sb ul .item').click(function (e) {
        e.preventDefault();
        $('.left-sb ul .item').not($(this)).removeClass('active');
        $(this).toggleClass('active');

        $('.left-sb ul .item .sublist').not($(this).find('.sublist')).slideUp();
        $(this).find('.sublist').slideToggle();
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

    const addSelectAll = matches => {
        if (matches.length > 0) {
            // Insert a special "Select all matches" item at the start of the 
            // list of matched items.
            return [
                { id: 'selectAll', text: 'Select all', matchIds: matches.map(match => match.id) },
                ...matches
            ];
        }
    };

    const handleSelection = event => {
        if (event.params.data.id === 'selectAll') {
            $('#my-select').val(event.params.data.matchIds);
            $('#my-select').trigger('change');
        };
    };

    $('#my-select').select2({
        minimumInputLength: 0,
        multiple: true,
        sorter: addSelectAll,
        tags: true,
    });
    $('#my-select').on('select2:select', handleSelection);


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
            console.log('1')
            $('.manuselecthide').hide();
            $('.menufield-title').text('Menu Name');

        } else if ($('#menucheck2').is(':checked')) {
            console.log('2')
            $('.manuselecthide').show();
            $('.menufield-title').text('Sub Menu Name');
            $('.manuselecthide label').text('Menu');

        } else if ($('#menucheck3').is(':checked')) {
            console.log('3')
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










});


