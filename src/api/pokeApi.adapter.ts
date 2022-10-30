import axios from 'axios';

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
  async get<T>(url: string) {
    const resp = await fetch(url);
    const data: T = await resp.json();
    return data;
  }
}

export class PokeApiAdapter implements HttpAdapter {
  private readonly axios = axios;

  async get<T>(url: string) {
    const { data } = await this.axios.get<T>(url);
    return data;
  }

  // async post(url: post, data: any) {}

  // async patch(url: post, data: any) {}

  // async delete(url: post) {}
}
