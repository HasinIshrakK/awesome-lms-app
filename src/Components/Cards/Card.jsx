const Card = ({ c }) => {
    return (
        <div
            key={c.id}
            className="card bg-base-100 rounded-2xl shadow-md border border-base-300 hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden"
        >
            <figure className="h-48 overflow-hidden">
                <img
                    src={c.thumbnail}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                />
            </figure>
            <div className="card-body">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="opacity-70 text-sm">{c.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-lg">${c.price}</span>
                    <div>
                        <button className="btn btn-primary btn-sm rounded-full m-1">View Details</button>
                        <button className="btn btn-primary btn-outline btn-sm rounded-full m-1">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;