# Generated by Django 4.0.3 on 2022-03-05 07:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_maintainer_options_alter_maintainer_managers_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='maintainer',
            name='username',
            field=models.CharField(max_length=30),
        ),
    ]