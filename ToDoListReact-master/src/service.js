
import axios from 'axios';

const apiUrl = "https://localhost:5150";


export default {
  // פונקציה לקבלת כל המשימות
  getTasks: async () => {
    try {
      const result = await axios.get(`${apiUrl}/items`);
      return result.data;
    } catch (error) {
      console.error('Error in getTasks:', error.message);
      return [];
    }
  },

  // פונקציה להוספת משימה חדשה
  addTask: async (name) => {
    try {
      const result = await axios.post(`${apiUrl}/items`, { name ,isComplete:false});
      console.log('addTask', result.data);
      return result.data;
    } catch (error) {
      console.error('Error in addTask:', error.message);
      return {};
    }
  },

  // פונקציה לעדכון סטטוס משימה
  setCompleted: async (id, isComplete) => {
    try {
      const result = await axios.put(`${apiUrl}/items/${id}?updatedItem=${isComplete}`);
      console.log('setCompleted', { id, isComplete });
      return result.data;
    } catch (error) {
      console.error('Error in setCompleted:', error.message);
      throw error; // חשוב לזרוק את השגיאה כדי שתוכל לתפוס אותה במקום אחר אם יש צורך
    }
  },
  // פונקציה למחיקת משימה לפי מזהה
  deleteTask: async (id) => {
    try {
      await axios.delete(`${apiUrl}/items/${id}`);
      console.log('deleteTask', id);
      return {};
    } catch (error) {
      console.error('Error in deleteTask:', error.message);
      return {};
    }
  },
};