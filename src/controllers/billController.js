import waitForElm from "../middlewares/waitForElm";
import getHistory from "./history.controller";
import dateValue from "../constant/date";

const billControler = () => {
    waitForElm('#startTime').then(()=>{
        document.getElementById('startTime').value = new Date(dateValue.currentStartDay).getFullYear()+"-"+(new Date(dateValue.currentStartDay).getMonth()+1)+'-'+(new Date(dateValue.currentStartDay).getDate())+'T00:00:01'
        document.getElementById('endTime').value = new Date(dateValue.currentEndDay).getFullYear()+"-"+(new Date(dateValue.currentStartDay).getMonth()+1)+'-'+(new Date(dateValue.currentStartDay).getDate())+'T23:59:59'
      })
      
      waitForElm('.billPrinter').then(()=>{

        

        let billingContentBidv = document.getElementsByClassName('bidv')[0]
        let billingContentVietin = document.getElementsByClassName('vietin')[0]
        let billingContentVcb = document.getElementsByClassName('vcb')[0]


        let closeBill = function() {
          billingContentBidv.style.opacity='0'
          billingContentBidv.style.zIndex='-1'
          billingContentVietin.style.opacity='0'
          billingContentVietin.style.zIndex='-1'
          billingContentVcb.style.opacity='0'
          billingContentVcb.style.zIndex='-1'
        }

        // Click Close Bill
        document.addEventListener('click', e => {
          if(e.path[0].getAttribute('class') == 'cancelPrnt') {
            closeBill();
            console.log('Click Cancel')
          }
        })

        // Press Esc to Close Bill
        window.addEventListener('keydown', e => {
          if(e.key === 'Escape') {
            closeBill();
            console.log('Esc Cancel')
          }
        })
      })
      
      waitForElm('.transHistory').then(()=>{
        function downloadCSVFile(csv, filename) {
          var csv_file, download_link;
          csv_file = new Blob([csv], {type: "text/csv"});
          download_link = document.createElement("a");
          download_link.download = filename;
          download_link.href = window.URL.createObjectURL(csv_file);
          download_link.style.display = "none";
          document.body.appendChild(download_link);
          download_link.click();
        }
        document.getElementById("download-button").addEventListener("click", function () {
          var html = document.getElementsByClassName("tableData")[0].outerHTML;
          htmlToCSV(html, "TaiBieu.csv");
        });
      
        let submitForm = document.getElementById('historyFormSubmit')
        submitForm.addEventListener('click', ()=>{
          let starTime = document.getElementById('startTime').value
          let endTime = document.getElementById('endTime').value
          let playerChoices = document.getElementById('playerChoices').value
          let player = document.getElementById('player').value
          if(endTime!='' && starTime!=''){
            getHistory(new Date(starTime).getTime(),new Date(endTime).getTime(),playerChoices,player,0)
          }else{
            alert('Vui lòng nhập ngày tháng')
          }
        })
      
        function htmlToCSV(html, filename) {
          var data = [];
          var rows = document.querySelectorAll("table tr");					
          for (var i = 0; i < rows.length; i++) {
            var row = [], cols = rows[i].querySelectorAll("td, th");						
            for (var j = 0; j < cols.length; j++) {
              row.push(cols[j].innerText);
            }
            data.push(row.join(","));		
          }
          downloadCSVFile(data.join("\n"), filename);
        }
      })
}

export default billControler;