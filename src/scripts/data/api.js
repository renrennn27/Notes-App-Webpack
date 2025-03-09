const BASE_URL = "https://notes-api.dicoding.dev/v2";

const api = {
  async getNotes() {
    try {
      const response = await fetch(`${BASE_URL}/notes`);
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      return { error: true, message: error.message };
    }
  },

  async getArchivedNotes() {
    try {
      const response = await fetch(`${BASE_URL}/notes/archived`);
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      return { error: true, message: error.message };
    }
  },

  async addNote({ title, body }) {
    try {
      const response = await fetch(`${BASE_URL}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return { error: true, message: error.message };
    }
  },

  async archiveNote(id) {
    try {
      const response = await fetch(`${BASE_URL}/notes/${id}/archive`, {
        method: "POST",
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return { error: true, message: error.message };
    }
  },

  async unarchiveNote(id) {
    try {
      const response = await fetch(`${BASE_URL}/notes/${id}/unarchive`, {
        method: "POST",
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return { error: true, message: error.message };
    }
  },

  async deleteNote(id) {
    try {
      const response = await fetch(`${BASE_URL}/notes/${id}`, {
        method: "DELETE",
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return { error: true, message: error.message };
    }
  },
};

export default api;
