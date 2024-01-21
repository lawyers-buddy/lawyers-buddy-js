class Client {
    constructor(client_id, lawyer_id, client_name, phone_number, email_id, password) {
      this.client_id = client_id;
      this.lawyer_id = lawyer_id;
      this.client_name = client_name;
      this.phone_number = phone_number;
      this.email_id = email_id;
      this.password = password;
    }
  }
  
  module.exports = Client;
  