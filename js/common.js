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













});