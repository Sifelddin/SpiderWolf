export const postData = async (
  data: any,
  baseUrl: string,
  endpoint: string,
  method: string,
) => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    let result = await response.json();
    if (result) {
      alert('you have been registered!');
    }
    return result;
  } catch (e) {
    console.log(JSON.parse(e));
  }
};
