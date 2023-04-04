function update(call) {
    jQuery('#interactive').val(call);
    interactive_call();
}

function interactive_call() {
    var content = jQuery('#interactive').val();
    if (content == '') {
        content = 'country/1/';
    }
    var call_url = 'api/v1/' + content;
    jQuery.ajax({
        dataType: 'json',
        url: call_url,
        context: document.body
    }).complete(function (data) {
        if (data['status'] == 200) {
            var d = jQuery.parseJSON(data['responseText']);
            jQuery('#well').text(JSON.stringify(d, null, '\t'));
        }
        else if (data['status'] == 404) {
            jQuery('#well').text(data['status'] + ' ' + data['statusText']);
        }
    });
}
