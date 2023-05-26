window.addEventListener('DOMContentLoaded', function() {
    const temperatureInput = document.getElementById('temperatureInput');
    const unitSelect = document.getElementById('unitSelect');
    const convertBtn = document.getElementById('convertBtn');
    const clearBtn = document.getElementById('clearBtn');
    const resultText = document.getElementById('resultText');
  
    convertBtn.addEventListener('click', function() {
      const temperatureValue = parseFloat(temperatureInput.value);
      const selectedUnit = unitSelect.value;
      
      if (!isNaN(temperatureValue)) {
        let result;
        
        if (selectedUnit === 'fahrenheit') {
            result = (temperatureValue - 32) * 5/9;
            resultText.value = result.toFixed(2) + " °C";
        } else if (selectedUnit === 'celsius') {
            result = (temperatureValue * 9/5) + 32;
            resultText.value = result.toFixed(2) + " °F";
        }
      }
    });
    
    clearBtn.addEventListener('click', function() {
      temperatureInput.value = '';
      resultText.value = '';
    });
  });
  