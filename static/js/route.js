function update (call) {
  jQuery('#interactive').val(call);
  interactive_call();
}

function interactive_call () {
  let content = jQuery('#interactive').val();
  if (content == '') {
    content = 'country/';
  }
  const call_url = 'http://api.diskovafrika.live/api/v1/' + content;
  jQuery.ajax({
    dataType: 'json',
    url: call_url,
    context: document.body
  }).complete(function (data) {
    if (data.status == 200) {
      const d = jQuery.parseJSON(data.responseText);
      jQuery('#interactive_output').text(JSON.stringify(d, null, '\t'));
    } else if (data.status == 404) {
      jQuery('#interactive_output').text(data.status + ' ' + data.statusText);
    }
  });
}
