# News Room

News Room is a web application that allows users to read and browse through news articles from different sources. It provides a user-friendly interface and a wide range of news categories to choose from. The application is built using Python and Flask framework.

## Features

- User authentication: Users can create an account and log in to access personalized features such as bookmarking articles and saving preferences.
- Browse news articles: Users can browse through a wide range of news articles from various sources and categories.
- Search articles: Users can search for specific articles using keywords or filters such as source, category, or date.
- Bookmark articles: Users can bookmark their favorite articles to read later.
- Save preferences: Users can save their preferences such as preferred news sources and categories for a personalized news feed.

## Installation

1. Clone the repository:

bash
git clone https://github.com/AndyMagwayer/news-room.git
2. Install the required dependencies:

bash
pip install -r requirements.txt
3. Set up the database:

bash
python manage.py db init
python manage.py db migrate
python manage.py db upgrade
4. Start the application:

bash
python manage.py runserver
The application will be accessible at `http://localhost:5000`.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request describing your changes.

Please make sure to follow the [code of conduct](CODE_OF_CONDUCT.md) when contributing.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

If you have any questions or suggestions, feel free to reach out to the project maintainer:

- Andy Magwayer - [andy.magwayer@example.com](mailto:andy.magwayer@example.com)

Thank you for using News Room!
