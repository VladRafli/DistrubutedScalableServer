/**
 * ! Call every seeded manualy here!
 * 
 * ? Call the seeder like below:
 * ```javascript
 * await require('./seed.js')()
 * ```
 */

 (async () => {
    await import('./user')
})().catch(err => { console.error(err) })