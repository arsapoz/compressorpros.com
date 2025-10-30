let token,defaultSelection,levelOne,levelSecond,levelThird,levelFourth, fourth_level_available = '';

export default async function (context) {
    defaultSelection = $('.default-category').text();
    if($(".form-wrapper-vch").hasClass('field-shown'))
    {
        fourth_level_available = true;
    }
    if($('.custom-vehicle').length>0 && defaultSelection.length>0)
    {
        token = context.bearerToken;
        levelOne =$('#vch-level-1').find('[data-default-selection]').text();
        levelSecond =$('#vch-level-2').find('[data-default-selection]').text();
        levelThird =$('#vch-level-3').find('[data-default-selection]').text();
        if(fourth_level_available)
        {
            
            levelFourth =$('#vch-level-4').find('[data-default-selection]').text();
        }
        else
        {
            fourth_level_available = false;
        }
        await changeEvents(token);
        if(localStorage.getItem("selectedFilters")!=null)
            {
                var levels = localStorage.getItem("selectedFilters").split(',');
                for (let index = 0; index < levels.length; index++) {
                    const element = levels[index].split(':');
                    if(element[0]=='first')
                    {
                        $("#vch-level-1 option:selected").removeAttr("selected");
                        $('#vch-level-1 option[value="'+element[1]+'"]').prop('selected', true);
                        $('#vch-level-1').val(element[1]);
                        $('.vch-mobile-view .selection').append('<span>'+$("#vch-level-1 option:selected").text()+'</span>')
                        await firstlevelSelection();
                        //$('#vch-level-1').trigger('change');
                        //document.getElementById("vch-level-1").options[1].selected = true;
                    }
                    else if(element[0]=='second')
                    {
                        $("#vch-level-2 option:selected").removeAttr("selected");
                        $('#vch-level-2 option[value="'+element[1]+'"]').prop('selected', true);
                        $('#vch-level-2').val(element[1]);
                        $('.vch-mobile-view .selection').append('<span>'+$("#vch-level-2 option:selected").text()+'</span>')
                        await secondLevelSelection();
                    }
                    else if(element[0]=='third')
                    {
                        $("#vch-level-3 option:selected").removeAttr("selected");
                        $('#vch-level-3 option[value="'+element[1]+'"]').prop('selected', true);
                        $('#vch-level-3').val(element[1]);
                        $('.vch-mobile-view .selection').append('<span>'+$("#vch-level-3 option:selected").text()+'</span>')
                        await thirdLevelSelection();
                    }
                    else if(element[0]=='fourth')
                    {
                        $("#vch-level-4 option:selected").removeAttr("selected");
                        $('#vch-level-4 option[value="'+element[1]+'"]').prop('selected', true);
                        $('.vch-mobile-view .selection').append('<span>'+$("#vch-level-4 option:selected").text()+'</span>')
                        $('#vch-level-4').val(element[1]);
                        await fourthLevelSelection()
                    }
                }
                $(".vch-mobile-view").addClass('active-filter');
            }
        else
        {
            $(".vch-main").removeClass("hide-filter");
            $('#vch-select-search').addClass("disabled");
            $('#vch-level-2').prop('disabled', true);
            $('#vch-level-3').prop('disabled', true);
            if(fourth_level_available)
                $('#vch-level-4').prop('disabled', true);
        }
    }
    else
    {
        $(".vch-main").removeClass("hide-filter");
        $('#vch-select-search').addClass("disabled");
        $('#vch-level-1').prop('disabled', true);
        $('#vch-level-2').prop('disabled', true);
        $('#vch-level-3').prop('disabled', true);
        $('.vch-reset').addClass("disabled");
        if(fourth_level_available)
            $('#vch-level-4').prop('disabled', true);
    }
    
}
async function changeEvents(token)
{
    
    await getFirstLevelCategories(token,defaultSelection); // Populate first level categories on load
    $('#vch-level-1').on('change',async function(){
        await firstlevelSelection() ;
    });

    $('#vch-level-2').on('change',async function(){
        await secondLevelSelection() 
    });

    $('#vch-level-3').on('change',async function(){
        await thirdLevelSelection()
    });

    $('#vch-level-4').on('change',async function(){
        await fourthLevelSelection()
    });

    $('.vch-change').on('click', function() {
        $('.vch-main').show();
        $(".vch-mobile-view").removeClass('active-filter');
        $(".vch-main").removeClass("hide-filter");
        $('body').removeClass('has-activeNavPages');
        $('.header').removeClass('is-open');
        $('.mobileMenu-toggle').removeClass('is-open');
        $('.mobile-menu.navPages-container').css('top', '');
    });

    $('.vch-reset').on('click', function() {
        localStorage.removeItem("selectedFilters")
        $('#vch-level-1').val(levelOne);
        $('#vch-level-1 option[value="'+levelOne+'"]').prop('selected', true);

        $('#vch-level-2').prop('disabled', true);
        $('#vch-level-2').val(levelSecond);
        $('#vch-level-2 option[value="'+levelSecond+'"]').prop('selected', true);
        $('#vch-level-2 option[data-test-path]').remove();

        $('#vch-level-3').prop('disabled', true);
        $('#vch-level-3').val(levelThird);
        $('#vch-level-3 option[value="'+levelThird+'"]').prop('selected', true);
        $('#vch-level-3 option[data-test-path]').remove();

        if(fourth_level_available)
        {
            $('#vch-level-4').prop('disabled', true);
            $('#vch-level-4 option[value="'+levelFourth+'"]').prop('selected', true);
            $('#vch-level-4').val(levelFourth);
            $('#vch-level-4 option[data-test-path]').remove();
        }

        $('#vch-select-search').addClass("disabled");
        $(".vch-mobile-view").removeClass('active-filter');
        $(".vch-main").removeClass("hide-filter");
        $('body').removeClass('has-activeNavPages');
        $('.header').removeClass('is-open');
        $('.mobileMenu-toggle').removeClass('is-open');
        $('.mobile-menu.navPages-container').css('top', '');
    });

    $('.button.button--primary.srch-btn').on('click', function() {
        var location = window.location.origin;
        if(fourth_level_available && $('#vch-level-4').find(":selected").val() != levelFourth)
        {
            location = location + $('#vch-level-4').find(":selected").attr('data-test-path');
            var selections = "first:"+$('#vch-level-1').find(':selected').val()+",second:"+$('#vch-level-2').find(':selected').val()+",third:"+$('#vch-level-3').find(':selected').val()+',fourth:'+$('#vch-level-4').find(':selected').val();
            localStorage.setItem("selectedFilters", selections);
            window.location.href=location; 
         
        }
        else if($('#vch-level-3').find(":selected").val() != levelThird) {
            location = location + $('#vch-level-3').find(":selected").attr('data-test-path');
            var selections = "first:"+$('#vch-level-1').find(':selected').val()+",second:"+$('#vch-level-2').find(':selected').val()+",third:"+$('#vch-level-3').find(':selected').val();
            localStorage.setItem("selectedFilters", selections);
           window.location.href=location; 
        } else if($('#vch-level-2').find(":selected").val() != levelSecond) {
            location = location + $('#vch-level-2').find(":selected").attr('data-test-path');
            var selections = "first:"+$('#vch-level-1').find(':selected').val()+",second:"+$('#vch-level-2').find(':selected').val();
            localStorage.setItem("selectedFilters", selections);
           window.location.href=location; 
        } else if($('#vch-level-1').find(":selected").val() != levelOne) {
            location = location + $('#vch-level-1').find(":selected").attr('data-test-path');
            var selections = "first:"+$('#vch-level-1').find(':selected').val();
            localStorage.setItem("selectedFilters", selections);
           window.location.href=location; 
        }
    });
}
async function getFirstLevelCategories(token,entityId) {
    // Fetch first level categories.
    await fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            query: `query levelOneCategories {
                site {
                    categoryTree(rootEntityId: ${entityId}) {
                        children {
                            name
                            path
                            entityId
                        }
                    }
                }
            }`
        })
    })
    .then(res => res.json())
    .then(function(res) {
        // Add first level categories to select option
        for(let i = 0; i < res.data.site.categoryTree[0].children.length; i++) {
            $('#vch-level-1').append('<option value="'+res.data.site.categoryTree[0].children[i].entityId+'" data-test-path="'+res.data.site.categoryTree[0].children[i].path+'">'+res.data.site.categoryTree[0].children[i].name+'</option>');
        }
    });
}

async function getChildrenCategories(token, entityId, catLevel) {
    // Fetch child categories.
    await fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            query: `query levelOneCategories {
                site {
                    categoryTree(rootEntityId: ${entityId}) {
                        children {
                            name
                            path
                            entityId
                        }
                    }
                }
            }`
        })
    })
    .then(res => res.json())
    .then(function(res) {
        if(res.data.site.categoryTree[0].children.length) {
            $('#vch-select-search').addClass("disabled");
            
            if(catLevel === 'second') 
                $('#vch-level-2 option:not(:first)').remove();
            else if(catLevel === "third")
                $('#vch-level-3 option:not(:first)').remove();
            else if(catLevel === "fourth")
                $('#vch-level-4 option:not(:first)').remove();

            for(let i = 0; i < res.data.site.categoryTree[0].children.length; i++) {
                // Add categories to appropiate select option
                if(catLevel === 'second') {
                    $('#vch-level-2').append('<option value="'+res.data.site.categoryTree[0].children[i].entityId+'" data-test-path="'+res.data.site.categoryTree[0].children[i].path+'">'+res.data.site.categoryTree[0].children[i].name+'</option>');
                    $('#vch-level-2').prop('disabled', false);
                } else if(catLevel === "third"){
                    $('#vch-level-3').append('<option value="'+res.data.site.categoryTree[0].children[i].entityId+'" data-test-path="'+res.data.site.categoryTree[0].children[i].path+'">'+res.data.site.categoryTree[0].children[i].name+'</option>');
                    $('#vch-level-3').prop('disabled', false);
                } else if(catLevel === "fourth"){
                    $('#vch-level-4').append('<option value="'+res.data.site.categoryTree[0].children[i].entityId+'" data-test-path="'+res.data.site.categoryTree[0].children[i].path+'">'+res.data.site.categoryTree[0].children[i].name+'</option>');
                    $('#vch-level-4').prop('disabled', false);
                }
            }
        } else {
            $('#vch-select-search').removeClass("disabled");
            // Disable and clear appropriate select options
            if(catLevel === 'second') {
                $('#vch-level-2').prop('disabled', true);
                $('#vch-level-2 option[value="'+levelSecond+'"]').prop('selected', true);
                $('#vch-level-2 option[data-test-path]').remove();

                $('#vch-level-3').prop('disabled', true);
                $('#vch-level-3 option[value="'+levelThird+'"]').prop('selected', true);
                $('#vch-level-3 option[data-test-path]').remove();

                $('#vch-level-4').prop('disabled', true);
                $('#vch-level-4 option[value="'+levelFourth+'"]').prop('selected', true);
                $('#vch-level-4 option[data-test-path]').remove();
            } else if(catLevel === "third"){
                $('#vch-level-3').prop('disabled', true);
                $('#vch-level-3 option[value="'+levelThird+'"]').prop('selected', true);
                $('#vch-level-3 option[data-test-path]').remove();

                $('#vch-level-4').prop('disabled', true);
                $('#vch-level-4 option[value="'+levelFourth+'"]').prop('selected', true);
                $('#vch-level-4 option[data-test-path]').remove();
            } else if(catLevel === "fourth"){
                $('#vch-level-4').prop('disabled', true);
                $('#vch-level-4 option[value="'+levelFourth+'"]').prop('selected', true);
                $('#vch-level-4 option[data-test-path]').remove();
            }
        }
    });
}
async function firstlevelSelection(){ //On change of first level category, get second level categories
    if($('#vch-level-1').find(':selected').val() != levelOne) {
        $('#vch-level-2').prop('disabled', true);
        $('#vch-level-2 option[value="'+levelSecond+'"]').prop('selected', true);
        $('#vch-level-2').val(levelSecond);
        $('#vch-level-3').prop('disabled', true);
        $('#vch-level-3 option[value="'+levelThird+'"]').prop('selected', true);
        $('#vch-level-3').val(levelThird);
        $('#vch-level-4').prop('disabled', true);
        $('#vch-level-4 option[value="'+levelFourth+'"]').prop('selected', true);
        $('#vch-level-4').val(levelFourth);
        // Add second level categories if first level category is valid
        const entityId = $('#vch-level-1').find(':selected').val();
        await getChildrenCategories(token, entityId, "second");
    } else {
        // Disable and clear selects if first level category is invalid
        $('#vch-select-search').addClass("disabled");
        $('#vch-level-2').prop('disabled', true);
        $('#vch-level-2').val(levelSecond);
        $('#vch-level-2 option[value="'+levelSecond+'"]').prop('selected', true);
        $('#vch-level-3').prop('disabled', true);
        $('#vch-level-3').val(levelThird);
        $('#vch-level-3 option[value="'+levelThird+'"]').prop('selected', true);
        $('#vch-level-4').prop('disabled', true);
        $('#vch-level-4 option[value="'+levelFourth+'"]').prop('selected', true);
        $('#vch-level-4').val(levelFourth);
    }
}

async function secondLevelSelection(){
    if($('#vch-level-2').find(':selected').val() != levelSecond) {
        $('#vch-level-3').prop('disabled', true);
        $('#vch-level-3 option[value="'+levelThird+'"]').prop('selected', true);
        $('#vch-level-3').val(''+levelThird+'');
        $('#vch-level-4').prop('disabled', true);
        $('#vch-level-4 option[value="'+levelFourth+'"]').prop('selected', true);
        $('#vch-level-4').val(levelFourth);
        // Add third level categories if second level category is valid
        const entityId = $('#vch-level-2').find(':selected').val();
        await getChildrenCategories(token, entityId, "third");
    } else {
        // Disable and clear third select if second level category is invalid
        $('#vch-level-3').prop('disabled', true);
        $('#vch-level-3 option[value="'+levelThird+'"]').prop('selected', true);
        $('#vch-level-3').val(levelThird);
        $('#vch-level-4').prop('disabled', true);
        $('#vch-level-4 option[value="'+levelFourth+'"]').prop('selected', true);
        $('#vch-level-4').val(levelFourth);
    }
}

async function thirdLevelSelection(){
    if(fourth_level_available)
    {
        if($('#vch-level-3').find(':selected').val() != levelThird) {
            $('#vch-level-4').prop('disabled', true);
            $('#vch-level-4 option[value="'+levelFourth+'"]').prop('selected', true);
            $('#vch-level-4').val(levelFourth);
            // Add fourth level categories if third level category is valid
            const entityId = $('#vch-level-3').find(':selected').val();
            await getChildrenCategories(token, entityId, "fourth");
        } else {
            // Disable and clear fourth select if third level category is invalid
            $('#vch-level-4').prop('disabled', true);
            $('#vch-level-4 option[value="'+levelFourth+'"]').prop('selected', true);
            $('#vch-level-4').val(levelFourth);
        }
    }
    else
    $('#vch-select-search').removeClass("disabled");   
}

async function fourthLevelSelection() {
    $('#vch-select-search').removeClass("disabled");   
}
$(document).ready(function() {
    function updateMenuPosition() {
        if ($('.active-filter').length > 0) {
            var headerHeight = $('.mbl-main').outerHeight();
            var activeFilterHeight = $('.active-filter').outerHeight();
            var totalHeight = headerHeight + activeFilterHeight;

            $('.mobile-menu.navPages-container').css('top', totalHeight + 'px');
        }
    }
    updateMenuPosition();
    setInterval(updateMenuPosition, 500);
});
