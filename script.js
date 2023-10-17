const questions = document.querySelectorAll('.question');
let currentStep = 0;
let emailSent = 0;

const emailProvider1 = document.getElementById('emailProvider1');
const emailProvider2 = document.getElementById('emailProvider2');

emailProvider1.addEventListener('change', () => {
  disableSelectedOption(emailProvider1, emailProvider2);
  const provider1 = emailProvider1.value;
  calculatePrice(provider1, emailSent, 'emailProvider1Price', 'emailProvider1Chart');
});

emailProvider2.addEventListener('change', () => {
  disableSelectedOption(emailProvider2, emailProvider1);
  const provider2 = emailProvider2.value;
  calculatePrice(provider2, emailSent, 'emailProvider2Price', 'emailProvider2Chart');
});

function disableSelectedOption(selectedProvider, otherProvider) {
  const selectedValue = selectedProvider.value;
  for (const option of otherProvider.options) {
    if (option.value === selectedValue) {
      option.disabled = true;
    } else {
      option.disabled = false;
    }
  }
}

function calculatePrice(providerName, emailSent, priceElementId, chartElementId) {
  let price = 0.0;
  let chartWidth = 0;
  
  
  
  // Set the vendor names
  const providerNameElement = document.getElementById(priceElementId.replace('Price', 'Name'));
  providerNameElement.textContent = providerName;

  // Your price calculation logic goes here, I'm providing a simplified example for SendGrid and Mailgun
  switch (providerName) {
    case "SendGrid (by Twilio)":
      if (emailSent <= 2000) {
        price = 0;
        chartWidth = (emailSent / 2000) * 100;
      } else if (emailSent <= 50000) {
        price = 19.95;
        chartWidth = ((emailSent - 2000) / 48000) * 100;
      } else if (emailSent <= 100000) {
        price = 34.95;
        chartWidth = ((emailSent - 50000) / 50000) * 100;
      } else if (emailSent <= 200000) {
        price = 89.95;
        chartWidth = ((emailSent - 100000) / 100000) * 100;
      } else if (emailSent <= 650000) {
        price = 249;
        chartWidth = ((emailSent - 200000) / 450000) * 100;
      } else {
        price = 449;
        chartWidth = 100;
      }
      break;

    case "Mailgun":
      if (emailSent <= 5000) {
        price = 0;
        chartWidth = (emailSent / 5000) * 100;
      } else if (emailSent <= 50000) {
        price = 35;
        chartWidth = ((emailSent - 5000) / 45000) * 100;
      } else if (emailSent <= 100000) {
        price = 75;
        chartWidth = ((emailSent - 50000) / 50000) * 100;
      } else if (emailSent <= 250000) {
        price = 215;
        chartWidth = ((emailSent - 100000) / 150000) * 100;
      } else if (emailSent <= 500000) {
        price = 400;
        chartWidth = ((emailSent - 250000) / 250000) * 100;
      } else {
        price = 550;
        chartWidth = 100;
      }
      break;
      
     case "Mailchimp":
      if (emailSent <= 1000) {
        price = 0;
        chartWidth = (emailSent / 1000) * 100;
      } else if (emailSent <= 5000) {
        price = 4.6;
        chartWidth = ((emailSent - 1000) / 4000) * 100;
      } else if (emailSent <= 6000) {
        price = 6.87;
        chartWidth = ((emailSent - 5000) / 1000) * 100;
      } else if (emailSent <= 50000) {
        price = 22.99;
        chartWidth = ((emailSent - 6000) / 44000) * 100;
      } else if (emailSent <= 60000) {
        price = 34;
        chartWidth = ((emailSent - 50000) / 10000) * 100;
      } else if (emailSent <= 150000) {
        price = 137.87;
        chartWidth = ((emailSent - 60000) / 90000) * 100;
      } else if (emailSent <= 375000) {
        price = 206;
        chartWidth = ((emailSent - 150000) / 225000) * 100;
      } else if (emailSent <= 600000) {
        price = 253;
        chartWidth = ((emailSent - 375000) / 225000) * 100;
      } else {
        price = 322;
        chartWidth = 100;
      }
      break;
      
   case "Amazon SES":
  if (emailSent <= 10000) {
    price = (emailSent / 1000) * 0.08 + 15; // $0.08 per 1000 emails with an additional $15 monthly cost
    chartWidth = (emailSent / 10000) * 100;
  } else if (emailSent <= 50000) {
    price = 10 * 0.08 + ((emailSent - 10000) / 1000) * 0.04 + 15; // $0.04 per 1000 emails with an additional $15 monthly cost
    chartWidth = ((emailSent - 10000) / 40000) * 100;
  } else if (emailSent <= 100000) {
    price = 10 * 0.08 + 40 * 0.04 + ((emailSent - 50000) / 1000) * 0.02 + 15; // $0.02 per 1000 emails with an additional $15 monthly cost
    chartWidth = ((emailSent - 50000) / 50000) * 100;
  } else {
    price = 10 * 0.08 + 40 * 0.04 + ((emailSent - 50000) / 1000) * 0.02 + 15;
    chartWidth = 100;
  }
  break;


case "SMTP.com":
  if (emailSent <= 50000) {
    price = 25;
    chartWidth = (emailSent / 50000) * 100;
  } else if (emailSent <= 100000) {
    price = 80;
    chartWidth = ((emailSent - 50000) / 50000) * 100;
  } else if (emailSent <= 500000) {
    price = 300;
    chartWidth = ((emailSent - 100000) / 400000) * 100;
  } else if (emailSent <= 1000000) {
    price = 500;
    chartWidth = ((emailSent - 500000) / 500000) * 100;
  } else {
    price = "Contact provider for pricing";
    chartWidth = 0;
  }
  break;

case "Postmark":
  if (emailSent <= 100) {
    price = 0;
    chartWidth = (emailSent / 100) * 100;
  } else if (emailSent <= 10000) {
    price = 15;
    chartWidth = ((emailSent - 100) / 9900) * 100;
  } else if (emailSent <= 50000) {
    price = 55;
    chartWidth = ((emailSent - 10000) / 40000) * 100;
  } else if (emailSent <= 125000) {
    price = 115;
    chartWidth = ((emailSent - 50000) / 75000) * 100;
  } else if (emailSent <= 300000) {
    price = 245;
    chartWidth = ((emailSent - 125000) / 175000) * 100;
  } else if (emailSent <= 700000) {
    price = 455;
    chartWidth = ((emailSent - 300000) / 400000) * 100;
  } else if (emailSent <= 1500000) {
    price = 775;
    chartWidth = ((emailSent - 700000) / 800000) * 100;
  } else {
    price = 991;
    chartWidth = 100;
  }
  break;

case "Mailjet":
  if (emailSent <= 6000) {
    price = 0;
    chartWidth = (emailSent / 6000) * 100;
  } else if (emailSent <= 15000) {
    price = 15;
    chartWidth = ((emailSent - 6000) / 9000) * 100;
  } else if (emailSent <= 50000) {
    price = 35;
    chartWidth = ((emailSent - 15000) / 35000) * 100;
  } else if (emailSent <= 100000) {
    price = 95;
    chartWidth = ((emailSent - 50000) / 50000) * 100;
  } else if (emailSent <= 250000) {
    price = 225;
    chartWidth = ((emailSent - 100000) / 150000) * 100;
  } else if (emailSent <= 500000) {
    price = 425;
    chartWidth = ((emailSent - 250000) / 250000) * 100;
  } else {
    price = "Contact provider for pricing";
    chartWidth = 0;
  }
  break;

case "SparkPost":
  if (emailSent <= 50000) {
    price = 20;
    chartWidth = (emailSent / 50000) * 100;
  } else if (emailSent <= 100000) {
    price = 75;
    chartWidth = ((emailSent - 50000) / 50000) * 100;
  } else if (emailSent <= 250000) {
    price = 170;
    chartWidth = ((emailSent - 100000) / 150000) * 100;
  } else if (emailSent <= 500000) {
    price = 290;
    chartWidth = ((emailSent - 250000) / 250000) * 100;
  } else if (emailSent <= 1000000) {
    price = 525;
    chartWidth = ((emailSent - 500000) / 500000) * 100;
  } else {
    price = "Contact provider for pricing";
    chartWidth = 0;
  }
  break;

case "Elastic Email":
  if (emailSent <= 3000) {
    price = 0;
    chartWidth = (emailSent / 3000) * 100;
  } else if (emailSent <= 60000) {
    price = 9;
    chartWidth = ((emailSent - 3000) / 57000) * 100;
  } else if (emailSent <= 180000) {
    price = 24;
    chartWidth = ((emailSent - 60000) / 120000) * 100;
  } else if (emailSent <= 300000) {
    price = 36;
    chartWidth = ((emailSent - 180000) / 120000) * 100;
  } else if (emailSent <= 450000) {
    price = 54;
    chartWidth = ((emailSent - 300000) / 150000) * 100;
  } else if (emailSent <= 600000) {
    price = 72;
    chartWidth = ((emailSent - 450000) / 150000) * 100;
  } else if (emailSent <= 900000) {
    price = 108;
    chartWidth = ((emailSent - 600000) / 300000) * 100;
  } else if (emailSent <= 1200000) {
    price = 140;
    chartWidth = ((emailSent - 900000) / 300000) * 100;
  } else if (emailSent <= 1500000) {
    price = 174;
    chartWidth = ((emailSent - 1200000) / 300000) * 100;
  } else if (emailSent <= 2250000) {
    price = 264;
    chartWidth = ((emailSent - 1500000) / 750000) * 100;
  } else if (emailSent <= 6000000) {
    price = 540;
    chartWidth = ((emailSent - 2250000) / 3750000) * 100;
  } else if (emailSent <= 16500000) {
    price = 1200;
    chartWidth = ((emailSent - 6000000) / 10500000) * 100;
  } else if (emailSent <= 30000000) {
    price = 1800;
    chartWidth = ((emailSent - 16500000) / 13500000) * 100;
  } else {
    price = "Contact provider for pricing";
    chartWidth = 0;
  }
  break;

case "SendinBlue":
  if (emailSent <= 3000) {
    price = 0;
    chartWidth = (emailSent / 3000) * 100;
  } else if (emailSent <= 20000) {
    price = 15;
    chartWidth = ((emailSent - 3000) / 17000) * 100;
  } else if (emailSent <= 40000) {
    price = 25;
    chartWidth = ((emailSent - 20000) / 20000) * 100;
  } else if (emailSent <= 60000) {
    price = 39;
    chartWidth = ((emailSent - 40000) / 20000) * 100;
  } else if (emailSent <= 100000) {
    price = 65;
    chartWidth = ((emailSent - 60000) / 40000) * 100;
  } else if (emailSent <= 150000) {
    price = 95;
    chartWidth = ((emailSent - 100000) / 50000) * 100;
  } else if (emailSent <= 250000) {
    price = 160;
    chartWidth = ((emailSent - 150000) / 100000) * 100;
  } else if (emailSent <= 300000) {
    price = 220;
    chartWidth = ((emailSent - 250000) / 50000) * 100;
  } else if (emailSent <= 750000) {
    price = 350;
    chartWidth = ((emailSent - 300000) / 450000) * 100;
  } else if (emailSent <= 1000000) {
    price = 550;
    chartWidth = ((emailSent - 750000) / 250000) * 100;
  } else {
    price = "Contact provider for pricing";
    chartWidth = 0;
  }
  break;

case "SocketLabs":
  if (emailSent <= 40000) {
    price = 39.95;
    chartWidth = (emailSent / 40000) * 100;
  } else if (emailSent <= 100000) {
    price = 79.95;
    chartWidth = ((emailSent - 40000) / 60000) * 100;
  } else if (emailSent <= 200000) {
    price = 125;
    chartWidth = ((emailSent - 100000) / 100000) * 100;
  } else if (emailSent <= 400000) {
    price = 225;
    chartWidth = ((emailSent - 200000) / 200000) * 100;
  } else if (emailSent <= 800000) {
    price = 425;
    chartWidth = ((emailSent - 400000) / 400000) * 100;
  } else {
    price = "Contact provider for pricing";
    chartWidth = 0;
  }
  break;

case "Netcore (formerly Pepipost)":
  if (emailSent <= 150000) {
    price = 25;
    chartWidth = (emailSent / 150000) * 100;
  } else if (emailSent <= 400000) {
    price = 65;
    chartWidth = ((emailSent - 150000) / 250000) * 100;
  } else if (emailSent <= 600000) {
    price = 101;
    chartWidth = ((emailSent - 400000) / 200000) * 100;
  } else if (emailSent <= 1000000) {
    price = 171;
    chartWidth = ((emailSent - 600000) / 400000) * 100;
  } else if (emailSent <= 2000000) {
    price = 311;
    chartWidth = ((emailSent - 600000) / 400000) * 100;  
  } else {
    price = "Contact provider for pricing";
    chartWidth = 0;
  }
  break;

case "MailerLite":
  if (emailSent <= 12000) {
    price = 0;
    chartWidth = (emailSent / 12000) * 100;
  } else if (emailSent <= 50000) {
    price = 24;
    chartWidth = ((emailSent - 12000) / 38000) * 100;
  } else if (emailSent <= 100000) {
    price = 48;
    chartWidth = ((emailSent - 50000) / 50000) * 100;
  } else if (emailSent <= 500000) {
    price = 240;
    chartWidth = ((emailSent - 100000) / 400000) * 100;
  } else if (emailSent <= 1400000) {
    price = 475;
    chartWidth = ((emailSent - 500000) / 900000) * 100;
  } else if (emailSent <= 9700000) {
    price = 811;
    chartWidth = ((emailSent - 1400000) / 8300000) * 100;
  } else if (emailSent <= 18800000) {
    price = 1573;
    chartWidth = ((emailSent - 9700000) / 9100000) * 100;
  } else {
    price = "Contact provider for pricing";
    chartWidth = 0;
  }      
  break;

    

    // Add more cases for other providers if needed

    default:
      price = 0.0;
      chartWidth = 0;
  }

  const priceElement = document.getElementById(priceElementId);
  const chartElement = document.getElementById(chartElementId);

  priceElement.textContent = `$${price.toFixed(2)}`;
  chartElement.style.width = `${chartWidth}%`;
}

function nextStep(step) {
  questions[currentStep].style.display = 'none';
  currentStep = step - 1;
  questions[currentStep].style.display = 'block';
}

function prevStep(step) {
  questions[currentStep].style.display = 'none';
  currentStep = step - 1;
  questions[currentStep].style.display = 'block';
}

function handleEmailSentInput() {
  const emailSentInput = document.getElementById('emailSentInput').value;

  if (emailSentInput) {
    const emailSentNumber = parseFloat(emailSentInput);

    if (isNaN(emailSentNumber)) {
      alert('Please enter a valid number.');
    } else if (emailSentInput.length > 7) {
      alert('For that large volume, the provider provides custom pricing. Please contact email vendor for that.');
    } else {
      // Input is valid, proceed with calculations
      emailSent = emailSentNumber;
      const provider1 = emailProvider1.value;
      const provider2 = emailProvider2.value;
      calculatePrice(provider1, emailSent, 'emailProvider1Price', 'emailProvider1Chart');
      calculatePrice(provider2, emailSent, 'emailProvider2Price', 'emailProvider2Chart');
      nextStep(3);
    }
  } else {
    alert('Please enter the number of emails.');
  }
}


    function resetCalculator() {
  // Reset all input fields and selections
  emailProvider1.value = emailProvider2.value = 'SendGrid (by Twilio)';
  emailProvider2.disabled = false;
  document.getElementById('emailProvider1Price').textContent = '$0.00';
  document.getElementById('emailProvider2Price').textContent = '$0.00';
  document.getElementById('emailProvider1Chart').style.width = '0';
  document.getElementById('emailProvider2Chart').style.width = '0';
  document.getElementById('emailSentInput').value = '';

  // Show the first question and reset the currentStep
  nextStep(1);
}

// Add an event listener to the emailProvider1 dropdown
document.getElementById('emailProvider1').addEventListener('change', function() {
    var emailProvider2 = document.getElementById('emailProvider2');
    
    // If a selection is made in emailProvider1, disable the initial "Choose provider 2" option in emailProvider2
    if (this.value !== "") {
        emailProvider2.querySelector('option[value=""]').disabled = true;
    } else {
        emailProvider2.querySelector('option[value=""]').disabled = false;
    }
});
