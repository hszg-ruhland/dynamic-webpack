
import {Modal} from "bootstrap";

function MsgOkCancel(msg_string, ok_function, cancel_function){
  const msgbox_markup = `
  <div class="modal fade" id="msgbox" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close cancel-button" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ${msg_string}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary cancel-button" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary ok-button" data-bs-dismiss="modal">Ok</button>
        </div>
      </div>
    </div>
  </div>
  `; 

  document.body.insertAdjacentHTML('beforeend',msgbox_markup);
  let okButton = document.querySelector('#msgbox .ok-button');
  let cancelButton = document.querySelector('#msgbox .cancel-button');
  let msgboxModal = new Modal(document.getElementById('msgbox'), { backdrop: "static"});

  okButton.addEventListener("click",function(){
    let modal = document.getElementById('msgbox');
    modal.parentNode.removeChild(modal);
    ok_function();
  });
  cancelButton.addEventListener("click",function(){
    let modal = document.getElementById('msgbox');
    modal.parentNode.removeChild(modal);
    cancel_function();
  });

  msgboxModal.show();
}

/* Example Usage 
document.addEventListener("DOMContentLoaded",function(){
  let msgboxButton = document.getElementById('msgbox-button');
  msgboxButton.addEventListener("click",function(){
    MsgOkCancel("Hallo Welt", function(){}, function(){});
  })
});
*/

export {MsgOkCancel};