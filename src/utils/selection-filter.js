// ova funkcija razvstava filmove i serije po žanrovima
// i grupira ih

export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series.filter(item => item.genre === "documentaries")
      },
      {
        title: "Comedies",
        data: series.filter(item => item.genre === "comedys")
      },
      {
        title: "Children",
        data: series.filter(item => item.genre === "children")
      },
      {
        title: "Crime",
        data: series.filter(item => item.genre === "crime")
      },
      {
        title: "Crime",
        data: series.filter(item => item.genre === "crime")
      },
      {
        title: "Feel Good",
        data: series.filter(item => item.genre === "feel-good")
      }
    ],
    films: [
      {
        title: "Drama",
        data: films.filter(item => item.genre === "drama")
      },
      {
        title: "Thriller",
        data: films.filter(item => item.genre === "thriller")
      },
      {
        title: "Children",
        data: films.filter(item => item.genre === "children")
      },
      {
        title: "Suspense",
        data: films.filter(item => item.genre === "suspense")
      },
      {
        title: "Romance",
        data: films.filter(item => item.genre === "romance")
      }
    ]
  };
}
