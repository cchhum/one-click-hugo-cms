exports.handler = async (event) => {
    const { email } = JSON.parse(event.body);
    
    // TODO: Add code here to handle the form submission
    // You can use the "email" variable to access the submitted email address
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully!" }),
    };
  };
  