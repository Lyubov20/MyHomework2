function addReview() {
  const input = document.querySelector(".inputReview");
  const container = document.querySelector(".containerOfReview");
  const text = input.value;

  if (text.length < 50 || text.length > 500) {
    alert("Ошибка! Отзыв должен содержать от 50 до 500 символов!");
    return;
  }

  const review = document.createElement("div");
  review.textContent = text;
  container.appendChild(review);
  input.value = "";
}

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

window.onload = () => {
  const containers = document.querySelector(".containerOfReview");
  initialData.forEach((a) => {
    a.reviews.forEach((b) => {
      const element = document.createElement("div");
      element.textContent = b.text;
      containers.appendChild(element);
    });
  });
};
