import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.container}>
            <h1 className={classes.colorRed}>Ecommerce - Retro Techno</h1>
            <section className={classes.categories}>
                <button>Cellphones</button>
                <button>Tablets</button>
                <button>Computers</button>
            </section>
        </nav>
    )
}


export default Navbar