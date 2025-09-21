export default defineEventHandler(async () => {
    try {
      const data = await $fetch('https://www.fruityvice.com/api/fruit/all')
      return data
    } catch (err) {
      throw createError({ statusCode: 500, statusMessage: 'Erreur API' })
    }
  })
  