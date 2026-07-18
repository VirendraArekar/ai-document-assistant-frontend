function StatCard({ title, value }) {
    return (
        <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-gray-400">
                {title}
            </h3>
            <p className="text-3xl font-bold mt-3">
                {value}
            </p>
        </div>
    )
}

export default StatCard;