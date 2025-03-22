function getArtistName(name) {
    const storedArtistName = localStorage.getItem(name);
    if (storedArtistName) {
      return storedArtistName; 
    }
  
    const urlParams = new URLSearchParams(window.location.search);
    const artistName = urlParams.get(name); 
    if (artistName) {
      localStorage.setItem(name, artistName); 
    }
    return artistName;
  }
  
  const artistName = getArtistName("artist");
  const artistNameElement = document.getElementById("artistName");
  
  if (artistName) {
    artistNameElement.textContent = `${artistName}`;
  } else {
    artistNameElement.textContent = "Unknown";
  }
  
  const itemsLink = document.getElementById("items");
  if (itemsLink) {
    itemsLink.href = `items.html?artist=${artistName}`;
  }
  
  function getTotalItemsSold(artistName) {
    let totalItems = 0;
    let totalPublishedItems = 0;
  
    items.forEach((item) => {
      if (item.artist === artistName) {
        totalPublishedItems++;
        if (item.dateSold) {
          totalItems++;
        }
      }
    });
    return `${totalItems}/${totalPublishedItems}`;
  }
  
  function getTotalIncome(artistName) {
    let totalIncome = 0;
  
    items.forEach((item) => {
      if (item.artist === artistName && item.dateSold) {
        totalIncome += item.priceSold;
      }
    });
    return `${totalIncome} $`;
  }
  
  const totalItemsSoldElement = document.getElementById("totalItemsSold");
  if (totalItemsSoldElement) {
    totalItemsSoldElement.textContent = `Total Items Sold: ${getTotalItemsSold(artistName)}`;
  }
  
  const totalIncomeElement = document.getElementById("totalIncome");
  if (totalIncomeElement) {
    totalIncomeElement.textContent = `Total Income: ${getTotalIncome(artistName)}`;
  }
  
  const chartContainer = document.getElementById("chart");
  
  const myItems = items.filter((item) => item.artist === artistName);
  const soldItems = myItems.filter(
    (item) => item.priceSold !== null && item.dateSold !== null
  );
  
  const soldDate = soldItems.map((item) => {
    const dateParts = item.dateSold.split("-");
    const year = dateParts[0];
    const month = dateParts[1] === "06" ? "10" : "11";
    const day = dateParts[2];
    const formattedDate = new Date(`${year}-${month}-${day}`);
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return formattedDate.toLocaleDateString("en-US", options);
  });
  
  const soldPrices = soldItems.map((item) => item.priceSold);
  const originalPrice = soldItems.map((item) => item.price);
  
  const charConfig = {
    type: "bar",
    data: {
      labels: soldDate,
      datasets: [
        {
          backgroundColor: "#A16A5E",
          label: "Price Sold",
          borderWidth: 4,
          data: soldPrices,
        },
        {
          backgroundColor: "#EDD5BB",
          label: "Original Price",
          borderWidth: 4,
          data: originalPrice,
        },
      ],
    },
    options: {
      indexAxis: "y",
    },
  };
  
  new Chart(chartContainer, charConfig);
  