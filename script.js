const questions = document.querySelectorAll('.question');
let currentStep = 0;
let emailSent = 0;

const emailProvider1 = document.getElementById('emailProvider1');
const emailProvider2 = document.getElementById('emailProvider2');
const nextButton = document.getElementById('nextButton');

emailProvider1.addEventListener('change', () => {
  disableSelectedOption(emailProvider1, emailProvider2);
  const provider1 = emailProvider1.value;
  calculatePrice(provider1, emailSent, 'emailProvider1Price', 'emailProvider1Chart', emailProvider2.value);
});

emailProvider2.addEventListener('change', () => {
  disableSelectedOption(emailProvider2, emailProvider1);
  const provider2 = emailProvider2.value;
  calculatePrice(provider2, emailSent, 'emailProvider2Price', 'emailProvider2Chart', emailProvider1.value);
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

function calculatePrice(providerName, emailSent, priceElementId, chartElementId, otherProviderName) {
  let price = 0.0;
  
  // Set the vendor names
  const providerNameElement = document.getElementById(priceElementId.replace('Price', 'Name'));
  providerNameElement.textContent = providerName;

  // Calculate price and chart width for the selected provider
  price = calculateProviderPrice(providerName, emailSent);
  const otherProviderPrice = calculateProviderPrice(otherProviderName, emailSent);

  // Calculate the relative chart width
  const chartWidth = calculateChartWidth(price, otherProviderPrice);

  const priceElement = document.getElementById(priceElementId);
  const chartElement = document.getElementById(chartElementId);

  priceElement.textContent = `$${price.toFixed(2)}`;
  chartElement.style.width = `${chartWidth}%`;
}

function calculateProviderPrice(providerName, emailSent) {
  let price = 0.0;

  // Price calculation logic for each provider
  switch (providerName) {
    case "SendGrid (by Twilio)":
      if (emailSent <= 2000) {
        price = 0;
      } else if (emailSent <= 50000) {
        price = 19.95;
      } else if (emailSent <= 100000) {
        price = 34.95;
      } else if (emailSent <= 200000) {
        price = 89.95;
      } else if (emailSent <= 650000) {
        price = 249;
      } else {
        price = 449;
      }
      break;

    case "Mailgun":
      if (emailSent <= 5000) {
        price = 0;
      } else if (emailSent <= 50000) {
        price = 35;
      } else if (emailSent <= 100000) {
        price = 75;
      } else if (emailSent <= 250000) {
        price = 215;
      } else if (emailSent <= 500000) {
        price = 400;
      } else {
        price = 550;
      }
      break;

    case "Mailchimp":
      if (emailSent <= 1000) {
        price = 0;
      } else if (emailSent <= 5000) {
        price = 4.6;
      } else if (emailSent <= 6000) {
        price = 6.87;
      } else if (emailSent <= 50000) {
        price = 22.99;
      } else if (emailSent <= 60000) {
        price = 34;
      } else if (emailSent <= 150000) {
        price = 137.87;
      } else if (emailSent <= 375000) {
        price = 206;
      } else if (emailSent <= 600000) {
        price = 253;
      } else {
        price = 322;
      }
      break;

    case "Amazon SES":
      if (emailSent <= 10000) {
        price = (emailSent / 1000) * 0.08 + 15;
      } else if (emailSent <= 50000) {
        price = 10 * 0.08 + ((emailSent - 10000) / 1000) * 0.04 + 15;
      } else if (emailSent <= 100000) {
        price = 10 * 0.08 + 40 * 0.04 + ((emailSent - 50000) / 1000) * 0.02 + 15;
      } else {
        price = 10 * 0.08 + 40 * 0.04 + ((emailSent - 50000) / 1000) * 0.02 + 15;
      }
      break;

    case "SMTP.com":
      if (emailSent <= 50000) {
        price = 25;
      } else if (emailSent <= 100000) {
        price = 80;
      } else if (emailSent <= 500000) {
        price = 300;
      } else if (emailSent <= 1000000) {
        price = 500;
      } else {
        price = "Contact provider for pricing";
      }
      break;

    case "Postmark":
      if (emailSent <= 100) {
        price = 0;
      } else if (emailSent <= 10000) {
        price = 15;
      } else if (emailSent <= 50000) {
        price = 55;
      } else if (emailSent <= 125000) {
        price = 115;
      } else if (emailSent <= 300000) {
        price = 245;
      } else if (emailSent <= 700000) {
        price = 455;
      } else if (emailSent <= 1500000) {
        price = 775;
      } else {
        price = 991;
      }
      break;

    case "Mailjet":
      if (emailSent <= 6000) {
        price = 0;
      } else if (emailSent <= 15000) {
        price = 15;
      } else if (emailSent <= 50000) {
        price = 35;
      } else if (emailSent <= 100000) {
        price = 95;
      } else if (emailSent <= 250000) {
        price = 225;
      } else if (emailSent <= 500000) {
        price = 425;
      } else {
        price = 425;
      }
      break;

    case "SparkPost":
      if (emailSent <= 50000) {
        price = 20;
      } else if (emailSent <= 100000) {
        price = 75;
      } else if (emailSent <= 250000) {
        price = 150;
      } else if (emailSent <= 500000) {
        price = 350;
      } else if (emailSent <= 1000000) {
        price = 650;
      } else {
        price = 650;
      }
      break;



  
  
      
      // ... (Previous code)

case "Elastic Email":
  if (emailSent <= 3000) {
    price = 0;
  } else if (emailSent <= 60000) {
    price = 9;
  } else if (emailSent <= 180000) {
    price = 24;
  } else if (emailSent <= 300000) {
    price = 36;
  } else if (emailSent <= 450000) {
    price = 54;
  } else if (emailSent <= 600000) {
    price = 72;
  } else if (emailSent <= 900000) {
    price = 108;
  } else if (emailSent <= 1200000) {
    price = 140;
  } else if (emailSent <= 1500000) {
    price = 174;
  } else if (emailSent <= 2250000) {
    price = 264;
  } else if (emailSent <= 6000000) {
    price = 540;
  } else if (emailSent <= 16500000) {
    price = 1200;
  } else if (emailSent <= 30000000) {
    price = 1800;
  } else {
    price = 1800;
  }
  break;

case "SendinBlue":
  if (emailSent <= 3000) {
    price = 0;
  } else if (emailSent <= 20000) {
    price = 15;
  } else if (emailSent <= 40000) {
    price = 25;
  } else if (emailSent <= 60000) {
    price = 39;
  } else if (emailSent <= 100000) {
    price = 65;
  } else if (emailSent <= 150000) {
    price = 95;
  } else if (emailSent <= 250000) {
    price = 160;
  } else if (emailSent <= 300000) {
    price = 220;
  } else if (emailSent <= 750000) {
    price = 350;
  } else if (emailSent <= 1000000) {
    price = 550;
  } else {
    price = 550;
  }
  break;

case "SocketLabs":
  if (emailSent <= 40000) {
    price = 39.95;
  } else if (emailSent <= 100000) {
    price = 79.95;
  } else if (emailSent <= 200000) {
    price = 125;
  } else if (emailSent <= 400000) {
    price = 225;
  } else if (emailSent <= 800000) {
    price = 425;
  } else {
    price = 425;
  }
  break;

case "Netcore (formerly Pepipost)":
  if (emailSent <= 150000) {
    price = 25;
  } else if (emailSent <= 400000) {
    price = 65;
  } else if (emailSent <= 600000) {
    price = 101;
  } else if (emailSent <= 1000000) {
    price = 171;
  } else if (emailSent <= 2000000) {
    price = 311;
  } else {
    price = 311;
  }
  break;

case "MailerLite":
  if (emailSent <= 12000) {
    price = 0;
  } else if (emailSent <= 50000) {
    price = 24;
  } else if (emailSent <= 100000) {
    price = 48;
  } else if (emailSent <= 500000) {
    price = 240;
  } else if (emailSent <= 1400000) {
    price = 475;
  } else if (emailSent <= 9700000) {
    price = 811;
  } else if (emailSent <= 18800000) {
    price = 1573;
  } else {
    price = 1573;
  }
  break;


    default:
      price = 0.0;
  }

  return price;
}

function calculateChartWidth(price, otherProviderPrice) {
  // Calculate the relative chart width based on prices
  const maxPrice = Math.max(price, otherProviderPrice);
  return (price / maxPrice) * 100;
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
    } else if (emailSentInput.length > 10) {
      alert('For that large volume, the provider provides custom pricing. Please contact the email vendor for that.');
    } else {
      // Input is valid, proceed with calculations
      emailSent = emailSentNumber;
      const provider1 = emailProvider1.value;
      const provider2 = emailProvider2.value;
      calculatePrice(provider1, emailSent, 'emailProvider1Price', 'emailProvider1Chart', provider2);
      calculatePrice(provider2, emailSent, 'emailProvider2Price', 'emailProvider2Chart', provider1);
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

// Fix the "Next" button
nextButton.addEventListener('click', () => {
  nextStep(currentStep + 2);
});

// Show the first question
nextStep(1);

 
