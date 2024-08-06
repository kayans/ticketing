import axios from 'axios';

export default ({ req }) => {
  // Since window only exists in browser
  // does not exist in Node.js environment
  if (typeof window === 'undefined') {
    // We are on the server
    // requests should be made to 'http://SERVICENAME.NAMESPACE.svc.cluster.local'

    // create a preconfigured version of axios
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers, // Specify the domain 'ticketing.dev'
    });
  } else {
    // We must be on the browser
    // requests can be made with a base url of ''
    return axios.create({
      baseUrl: '/',
    });
  }
};
