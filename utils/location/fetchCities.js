export async function fetchCities(query) {
  // NOTE : requests are made to the following API -> https://developers.teleport.org/api/
  // TODO : Standardize fetch requests, with appropriate headers, etc ...

  const res = await fetch(
    `https://api.teleport.org/api/cities/?search=${query}`,
    {
      method: "GET",
    }
  );
  return await res.json().then((response) => {
    const cities = [];
    const results = response["_embedded"]["city:search-results"];

    for (var result of results) {
      const city_name = result.matching_full_name;
      const city_href = result._links["city:item"].href;

      const city = {
        name: city_name,
        href: city_href,
      };

      cities.push(city);
    }
    return cities;
  });
}
