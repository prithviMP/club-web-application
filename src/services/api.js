const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const MEDIA_URL = import.meta.env.VITE_MEDIA_URL;

export const getImageUrl = (path, size = 'original') => {
  if (!path) return null;
  return `${MEDIA_URL}/${size}/${path}`;
};

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'An error occurred');
  }
  return response.json();
};

export const fetchBrands = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/brands`);
    return handleResponse(response);
  } catch (error) {
    console.error('Error fetching brands:', error);
    throw error;
  }
};

export const fetchCollaborations = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/collaborations`);
    return handleResponse(response);
  } catch (error) {
    console.error('Error fetching collaborations:', error);
    throw error;
  }
};

export const fetchNewArrivals = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/new-arrivals`);
    return handleResponse(response);
  } catch (error) {
    console.error('Error fetching new arrivals:', error);
    throw error;
  }
};

export const fetchPopularProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/popular`);
    return handleResponse(response);
  } catch (error) {
    console.error('Error fetching popular products:', error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return handleResponse(response);
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const fetchProductsByBrand = async (brandId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/brands/${brandId}/products`);
    return handleResponse(response);
  } catch (error) {
    console.error('Error fetching brand products:', error);
    throw error;
  }
};