const sounds = ['Beep', 'Bird', 'Jungle', 'Car', 'Winning', 'Firework']
 
sounds.forEach(sound => {
    const btn = document.createElement('button')


    btn.innerText = sound  

    btn.addEventListener('click', () => {  
        stopSong()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSong() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}